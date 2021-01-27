#include <stdio.h>
#include <stdlib.h>

typedef struct node {
  int data;
} node;

node *make_node(int data){
  node *tnode = (node *)malloc(sizeof(node));
  tnode->data = data;
  return tnode;
}

typedef struct list {
  int size;
  void *item;
  struct list *next;
} list;

list *make_list(void *item){
  list *tlist = (node *)malloc(sizeof(node));
  list->next = NULL;
  tnode->data = data;
  return tnode;
}

void add_fnode(list *tlist, node *tnode){

}

int main(void){
  int test_data[] = {0,1,2,3,4,5,6};

  for(int i = 0; i < 7; ++i){
    test_data[i];
  }

  list tlist;
  printf("size: %d", tlist.size);
  return 0;
}
