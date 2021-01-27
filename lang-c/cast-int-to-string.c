#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int main(){
  int eps1 = 3140045;
  int eps2 = 45456;
  static char eps_ch[12];

  int len = sprintf(eps_ch, "%d", eps1);
  len = sprintf(eps_ch, "%d", eps2);
  printf("len: %d\n", len);
  printf("str_len: %ld\n", strlen(eps_ch));
  printf("%s", eps_ch);

  /*
  char epsch[12];
  itoa(eps, epsch, 10);
  printf("%s", epsch);
  */

  int ten = 10;
  char ten_ch[12];
  sprintf(ten_ch, "%d", ten);
  printf("\nten: %s", ten_ch);



  return 0;
}
