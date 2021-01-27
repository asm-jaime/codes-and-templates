#include <stdio.h>
#include <stdlib.h>

int get_sign_sum(const int ** this_vector)
{
    int this_sum = 0;
    for(int i = 0; i < max_nums; i++){
        /*if signum +*/
        if(this_vector[i][0] == 1){
            this_sum = this_sum + this_vector[i][1];
        } else { /*if signum -*/
            this_sum = this_sum - this_vector[i][0];
        };
    };
    return this_sum; 
}

int** get_rnd2d_vector(int max_nums)
{
    /*const int this_max_nums = rand() % (max_nums-2) + 2;*/
    int* values = calloc(2 * max_nums, sizeof(int));
    int** vector = malloc(max_nums * sizeof(int*));
    for (int i = 0; i < max_nums; ++i)
    {
        vector[i] = values + (2 * i);
    };

    for(int i = 0; i < max_nums; ++i){
        vector[i][1] = rand() % max_num;
        current_sum = current_sum + (rand() % 1)*vector[i][1];
    };
    return vector;
}

int main()
{
    int ** this_vector = get_rnd2d_vector();
    for(int i = 0; i < max_nums; i++){
        printf("here [0] %d\n", this_vector[i][0]);
        printf("here [1] %d\n", this_vector[i][1]);
    };
    printf("and here\n");
    return 0;
}
