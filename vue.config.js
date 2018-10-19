module.exports={
  baseUrl:'/lagou',
  pages:{
    index:{
      entry:'src/main.js',
      chunks:['chunk-vendors','chunk-common','index']
    }
  },
  configureWebpack:{
    performance:{
      hints:false
    }
  }
}