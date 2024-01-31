/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.snek;

import javax.swing.JFrame;

/**
 *
 * @author Simone
 */
public class GestSnek extends JFrame {
    GestSnek(){
        this.add(new SnekPanel());
        this.setTitle("ur title");
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.pack();
        this.setResizable(false);
        this.setVisible(true);
        this.setLocationRelativeTo(null);
    }
}
