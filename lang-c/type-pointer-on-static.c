#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

static int res1[] = {1,2};
static int res2[] = {3,4};

static int res3[][2] = {{{0}},{{0}}};

static int saw1[][4] = {
  {4,3,2,1},
  {4,3,1,2},
  {4,2,3,1},
  {4,2,1,3},
  {4,1,3,2},
  {4,1,2,3},
};

int main(){
  int *p1 = res1;
  int *p2 = res1;
  p2 = NULL;
  printf("\n%d", p1[0]);
  if (p2 == NULL){
    printf("\np2 is null");
  }

  int ***saw = malloc(16*sizeof(int**));
  saw[0] = malloc(6*sizeof(int*));
  for(int j = 0; j < 6; ++j){
    saw[0][j] = saw1[j];
  };
  saw[0][0] = NULL;
  for(int j = 0; j < 6; ++j){
    if(saw[0][j] == NULL) continue;
    printf("\nsaw: %d", saw[0][j][2]);
  };
  printf("\n========== wiht null");
  saw[0][0] = saw1[0];
  for(int j = 0; j < 6; ++j){
    if(saw[0][j] == NULL) continue;
    printf("\nsaw: %d", saw[0][j][2]);
  };

  return 0;
}
