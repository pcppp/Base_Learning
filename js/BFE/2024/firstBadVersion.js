/*
 * @Descripttion:
 * @version:
 * @Author: pc
 * @Date: 2024-10-09 19:16:53
 * @LastEditors: your name
 * @LastEditTime: 2024-10-09 20:07:00
 */
/**
 * @param {IsBad} isBad
 * @return {(v: number) => number}
 */
function firstBadVersion(isBad) {
  // firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
    // write your code to return the first bad version
    // if none found, return -1
    while(version >= 0){
      if(isBad(version)){
        if(!isBad(--version)){
          return version+1
        }
      }else{
        return -1
      }
    }
  };
}
