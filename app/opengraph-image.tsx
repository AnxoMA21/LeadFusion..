import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OGImage() {
  return new ImageResponse(
    (<div style={{width:"100%",height:"100%",background:"linear-gradient(135deg,#0b1220,#111827)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:64,fontFamily:"system-ui, Segoe UI",textAlign:"center"}}>
      <div><div style={{fontSize:28,opacity:.7,marginBottom:8}}>Agencia de Marketing</div><div><b>LeadFusion</b></div><div style={{fontSize:24,marginTop:12,opacity:.85}}>Creatividad + Datos + IA</div></div>
    </div>), size
  );
}
