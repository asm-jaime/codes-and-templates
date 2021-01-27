#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){
  char *str1 = "first ";
  char *str2 = "second";

  char *str3 = calloc(strlen(str1), sizeof(char));
  for(int i = 0; i < strlen(str1); ++i){
    str3[i] = str1[i];
  };
  str3 = (char*)realloc(str3, (strlen(str3)+strlen(str2)+1) * sizeof(char));
  //str3[6] ='d';
  for(int i = strlen(str3); i < strlen(str3)+strlen(str2); ++i){
    str3[i] = str2[i];
  };


  printf("len: %ld\n", strlen(str3));
  printf("%s", str3);

  return 0;
}
