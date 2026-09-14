// 💭 SOAP API ka matlab hai:
// 👉 SOAP = Simple Object Access Protocol

// 🟩 Ye ek protocol hai jo software applications ko ek dusre se communicate karne ke liye use hota hai — especially over a network (like internet).

// 💭 SOAP API Kya Hai?

// 👉 SOAP API ek standardized protocol hai jo XML (Extensible Markup Language) ka use karta hai data exchange ke liye. Iska use usually enterprise-level applications mein hota hai — jahan security, reliability, aur strict standards important hote hain.

// | Feature            | Detail                                                                 |
// | ------------------ | ---------------------------------------------------------------------- |
// | **Protocol-based** | SOAP ek protocol hai (REST ek architectural style hai).                |
// | **Format**         | SOAP sirf **XML** format support karta hai.                            |
// | **Transport**      | Commonly HTTP use hota hai, but it can also work over SMTP, TCP, etc.  |
// | **Strict Rules**   | Strict structure follow karta hai — e.g., `<Envelope>`, `<Body>`.      |
// | **WSDL Support**   | Web Services Description Language se API ka structure define hota hai. |
// | **Security**       | High-level security support (WS-Security) hoti hai.                    |

// 🟦 SOAP vs REST (Comparison):
// Feature	    SOAP	                            REST
// Protocol	    Protocol (fixed rules)	            Architectural style
// Format	    XML only	                        JSON, XML, HTML, etc.
// Speed	    Slower (XML parsing)	            Faster (usually uses JSON)
// Security	    Enterprise-level (WS-Security)	    Simpler, uses HTTPS mostly
// Flexibility	Less flexible	                    More flexible
// Use case	    Banking, enterprise apps	        Web apps, mobile apps
// 🟦 Kab Use Karte Hain SOAP?

// ✅ Jab high security required ho.

// ✅ Jab multiple protocol support chahiye (HTTP, SMTP, etc.).

// ✅ Jab strict contract (WSDL) ki zarurat ho.

// ✅ Legacy systems ke saath integration mein.

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" 
                  xmlns:web="http://example.com/webservice">
   <soapenv:Header/>
   <soapenv:Body>
      <web:getUser>
         <web:userId>123</web:userId>
      </web:getUser>
   </soapenv:Body>
</soapenv:Envelope>

