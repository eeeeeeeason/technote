  ## 需求：将相同ip下请求的相同地址限制为5秒一次
  ### 实现：通过nginx限制
  - 参数a: limit_req_zone
  - 参数b: limit_req
    - 参数理解：rate=1r/s 配置用于限制每个地址每秒只能请求一次，内存区域10mb，即可以有10mb/32b个ip地址进行访问
    - /api底下的zone使用的变量需要为req_zone声明的
    - nodelay表示一次过执行 rate+burst的条数。此外的内容丢弃，超出以后每秒执行一条，且较快的会存入到队列中，直到队列burst塞满
    ```sh
      http {
        limit_req_zone $binary_remote_addr zone=req_one:10m rate=1r/s; #注意此处的req_one要与下述的名称匹配否则会报错nginx: [emerg] zero size shared memory zone 
        location /api {
          limit_req zone=req_one burst=5 nodelay;
          proxy_pass	https://cloud.spinq.cn:8050/uat/api;
        }
      }
    ```
```
假如用户配置的平均发送速率为10r/s，则每隔0.1秒一个令牌被加入到桶中；
 
假设桶最多可以存发b个令牌。如果令牌到达时令牌桶已经满了，那么这个令牌会被丢弃；
 
当一个n个字节的数据包到达时，就从令牌桶中删除n个令牌，并且数据包被发送到网络；
 
如果令牌桶中少于n个令牌，那么不会删除令牌，并且认为这个数据包在流量限制之外；
 
算法允许最长b个字节的突发，但从长期运行结果看，数据包的速率被限制成常量r。对于在流量限制外的数据包可以以不同的方式处理：
它们可以被丢弃；
它们可以排放在队列中以便当令牌桶中累积了足够多的令牌时再传输；
它们可以继续发送，但需要做特殊标记，网络过载的时候将这些特殊标记的包丢弃。
```
