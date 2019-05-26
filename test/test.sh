#!/usr/bin/env bash

CWD=$(dirname $(which $0))
ERR=0

for d in $(find ${CWD}/* -type d)
do
  dname=$(basename ${d})

  for f in $(find ${d} -maxdepth 1 -name *.test.js)
  do
    fname=$(basename $f)

    node ${f}
    RET=$?

    if [[ ${RET} -eq 0 ]]; then
      echo $dname/$fname ... PASS
    else
      echo $dname/$fname ... FAIL
    fi

    ERR=$((ERR + ${RET}))
  done
done

exit ${ERR}
