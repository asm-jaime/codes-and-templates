#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* concat(const char *s1, const char *s2) {
    char *result = malloc(strlen(s1)+strlen(s2)+1);
    strcpy(result, s1);
    strcat(result, s2);
    return result;
}

int main(){
  char *str1 = "first ";
  char *str2 = "second";

  char *str3 = concat(str1, str2);

  printf("%s", str3);

  return 0;
}
