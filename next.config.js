/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["www.codemobiles.com" ],
        dangerouslyAllowSVG:true,
        minimumCacheTTL:0
    }
}

module.exports = nextConfig
