#include <stdio.h>
#include <stdlib.h>

const int FIRST_EXAMPLE = 1;
const int SECOND_EXAMPLE = 1;

/*#define SECOND_EXAMPLE 1;*/
// dfdfdf
int main(){
printf("here\n");
#if FIRST_EXAMPLE
printf("and here\n");
    int i;
    int k = 0;
    int t = 0;
    int s = 0;
    int A[10] = {8,5,11,4,6,9,4,10,7,8};
    
    for(i = 0; i < 10; i++){
		printf("A: %d\n", A[i]);
    };
    
    for(i = 0; i < 9; i++){
        if(A[i] > k){
            k = A[i];
            A[i+1] = A[i];
        } else {
            t = A[i];
        };
        s = k + t;
    };
    printf("s: %d\n", s);
    for(i = 0; i < 10; i++){
		printf("A: %d\n", A[i]);
    };
#endif

#if (SECOND_EXAMPLE == 1)
    int j;

    int x;
    int A;
    int B;
    
    /*scanf("%d",&x);*/
    for(int j = 0; j < 100000; ++j){
        x = j;
        A = 0;
        B = 0;
        while(x > 0){
            A = A + 1;
            if( B < (x % 10)){
                B = x % 10;
            };
            x = x/10;
        };
        if((A == 4) && (B == 5)){
            printf("A: %d, B: %d x: %d\n",A , B, j);
        }
    };
#endif
    return 0;
}
