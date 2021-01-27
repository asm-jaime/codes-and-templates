#include <stdio.h>
#include <stdlib.h>

#define SIZE_FNS 3

typedef enum {red, blue, green} color;

typedef struct somet {
  void (*fns[SIZE_FNS])();
} somet;

void redder(void){
  puts("red");
}

void bluer(int i){
  puts("blue");
}

void greener(double d){
  puts("green");
}

void some(color x){
  printf("%d", x);
}

int main(void){
  color this = red;
  somet *this_some = (somet *)malloc(sizeof(somet));

  this_some->fns[red] = redder;
  this_some->fns[blue] = bluer;
  this_some->fns[green] = greener;

  this_some->fns[red]('r');
  this_some->fns[blue](1);
  this_some->fns[green](0.1);

  return 0;
}
