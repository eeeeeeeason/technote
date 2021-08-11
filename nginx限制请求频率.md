  ## 需求：将相同ip下请求的相同地址限制为5秒一次
  ### 实现：通过nginx限制
  - 参数a: limit_req_zone
  - 参数b: limit_req
    - 参数理解：rate=1r/s 配置用于限制每个地址每秒只能请求一次，内存区域10mb，即可以有10mb/32b个ip地址进行访问
    - /api底下的zone使用的变量需要为req_zone声明的
    - nodelay表示逐条执行
    ```sh
      http {
        limit_req_zone $binary_remote_addr zone=req_one:10m rate=1r/s; #注意此处的req_one要与下述的名称匹配否则会报错nginx: [emerg] zero size shared memory zone 
        location /api {
          limit_req zone=req_one burst=5 nodelay;
          proxy_pass	https://cloud.spinq.cn:8050/uat/api;
        }
      }
    ```
