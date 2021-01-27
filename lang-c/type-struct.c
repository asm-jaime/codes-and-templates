#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct store {
  void *data;
  bool (*dispatch)();
  void (*subscribes[4])();
} store;

void logger(const store *this){
  puts("we inside first logger");
}

void logger2(const store *this){
  puts("we inside second logger");
}

bool dispatch(const struct store* this_store) {
  puts("dispatched");
  return true;
}


int main(void){

  int *first = (int*)calloc(100, sizeof(int));
  int *second = (int*)calloc(100, sizeof(int));

  for(int i = 0; i < 100; ++i){
    first[i] = 12;
    second[i] = 13;
  }

  struct store buff;
  buff.data = (void*)first;

  buff.dispatch = (bool(*)(unsigned long))dispatch;
  bool status = buff.dispatch(&buff);
  printf("dispatch status: %d\n", status);

  printf("%d\n", ((int *)buff.data)[0]);
  free(buff.data);

  return 0;
}
