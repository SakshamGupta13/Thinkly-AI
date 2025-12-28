#include<iostream>
using namespace std;

class one{
    public:
    int x;
    int y;
    one(int a, int b){
        x = a;
        y = b;
    }
    void sum(int a, int b){
        cout<<x <<" + "<< y<<" = "<<x+y<<endl;
    }
    void sum(double a, int b){

    }
};
// class two inherits one

    void checkPrime(int n){
        for(int i=2;i<n;i++){
            if(n % i != 0){
                cout<<"Prime Number"<<endl;
                break;
            }
            else{
                cout<<"Not a Prime Number"<<endl;
                break;
            }
        }
    }

int main(){
    // for(int i=0;i<5;i++){
    //     for(int j=1;j<i;j++){
    //         for(int k=i;k<j;k++){
    //             cout<<" ";
    //         }
    //         cout<<"*";
    //     }
    //     cout<<endl;
    // }
    checkPrime(6);
}