import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Plan A",
  description: "El sistema completo para recuperar a tu amor perdido en 21 días o menos",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google tag (gtag.js) - TEMPORARIAMENTE DESABILITADO PARA TESTE */}
        {/* 
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-49QXF2FYMD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-49QXF2FYMD');
            `,
          }}
        />
        */}

        {/* Pixel de Rastreamento - Corrigido com o ID correto */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "683e4507be02a8b1bece6041";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `,
          }}
        />

        {/* UTMFY Tracking - Configuração CORRIGIDA para excluir Hotmart */}
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-subids
          data-utmify-exclude-domains="pay.hotmart.com"
          async
          defer
        ></script>
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}