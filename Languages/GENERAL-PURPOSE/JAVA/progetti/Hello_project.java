public class Hello_project{
	static int numero=12;
	public static void main(String[] args){
		//NetBeans: Run-> Set project Configuration -> Customize -> Run -> Arguments
		String parametri="";
		if(args.lenght>0 && args[0]!=null) parametri+=args[0]+" ";
		if(args.lenght>1 && args[1]!=null) parametri+=args[1]+" ";
		if(args.lenght>2 ) parametri+=args[2]+" ";
	}
}