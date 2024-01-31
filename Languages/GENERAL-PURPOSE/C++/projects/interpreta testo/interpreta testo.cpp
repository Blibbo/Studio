#include <windows.h>
#include <iostream>
#include <string.h>
//#include <stdio.h>
#include <conio.h>
#define CAP 999999
using namespace std;
/*int getch() {
	termios before;
	tcgetattr (STDIN_FILENO, &before);
	termios after = before;
	after.c_lflag &= (~ICANON);
	after.c_lflag &= (~ECHO);
	tcsetattr (STDIN_FILENO, TCSANOW, &after);
	
	char c;
	read (STDIN_FILENO, &c, sizeof(char));
	
	tcsetattr (STDIN_FILENO, TCSANOW, &before);
	
	return c;
}*/
int main(){
	setlocale(LC_ALL, "");
	int i, j, k, tp;
	char x;
	getch();
	//string ilminchione = "il caccone. Il caccone e durow";
	char ilminchione[] = {"È successo. Di nuovo."} ;
	//cout<<ilminchione;
	for(i=0; i<CAP; i++){
		if(ilminchione[i]=='\0') break;
		if(ilminchione[i]!=',' && ilminchione[i]!='.'){	
			cout<<ilminchione[i];
			Sleep(50); //50
		}
		if(ilminchione[i]==','){
			for(j=1; j<=3; j++){
				Sleep(110);
				cout<<" .";
			}
			getch();
			system("cls");
		}else{
			if(ilminchione[i]=='.'){
				k = i, tp = 1;
				while(ilminchione[k+1]=='.'){
					k++;
					tp++;
				}
				if(tp==1){
					cout<<ilminchione[i];
					getch();
					system("cls");
				}else{
					for(int l=1;l<=tp;l++){
						Sleep(200);
						cout<<'.';
					}
					i+=tp-1;
					getch();
					system("cls");
				}
			}else{
				if(ilminchione[i]=='?' || ilminchione[i]=='!' || ilminchione[i]==';' || ilminchione[i]==':'){
					getch();
					system("cls");
				}
			}
		}
	}
	return 0;
}

