 - git remote -v 查看本地仓库的远程仓库，例如我的为
```
  origin	https://github.com/eeeeeeeason/element.git (fetch)
  origin	https://github.com/eeeeeeeason/element.git (push)
```
 - git remote add upstream https://github.com/ElemeFE/element.git 增加上游的仓库地址
 - 此时再次git remote -v得到
```
  origin	https://github.com/eeeeeeeason/element.git (fetch)
  origin	https://github.com/eeeeeeeason/element.git (push)
  upstream	https://github.com/ElemeFE/element.git (fetch)
  upstream	https://github.com/ElemeFE/element.git (push)
```
 - git fetch upstream下载上游地址的内容
 - git merge upstream/master 有冲突解决冲突，最后提交
