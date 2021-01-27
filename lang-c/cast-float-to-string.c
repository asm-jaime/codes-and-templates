#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int main(){
  double eps = 3.140045405004505;
  char eps_ch[12];

  sprintf(eps_ch, "%.10f", eps);
  //snprintf(eps_ch, 12, "%lf", eps);
  printf("%s", eps_ch);

  return 0;
}
