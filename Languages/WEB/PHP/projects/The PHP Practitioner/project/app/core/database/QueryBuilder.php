<?php

class QueryBuilder{
    protected $pdo;

    public function __construct(PDO $pdo){
        $this->pdo=$pdo;
    }

    public function selectAll($table){
        $statement = $this->pdo->prepare("select * from $table");
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_CLASS);
    }

    public function insertData($table, $parameters){
        $sqlCode = sprintf(
            'insert %s (%s) values (%s)',
            $table,
            implode(', ', array_keys($parameters)),
            ':' . implode(', :', array_keys($parameters))
        );

        try{
            $statement = $this->pdo->prepare($sqlCode);
            $statement->execute($parameters);
        }catch(Exception $e){
            die("Qualcosa è andato storto");
        }
    }
}