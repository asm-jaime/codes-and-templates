#include <stdio.h>
#include <stdlib.h>

int compare(const void * x1, const void * x2)/*{{{*/
{
  return ( *(int*)x1 - *(int*)x2 );
}/*}}}*/


int main(){
    const int max_nums = 5;
    int this_vector[] = {25,35,45,15,25};
    qsort(this_vector, max_nums, sizeof(int), compare);
    for(int i = 0; i < max_nums; i++){
        printf("here %d\n", this_vector[i]);
    };
    printf("and here\n");
    return 0;
}
