<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
    <html> 
      <body>
        <table border="1" cellpadding="10" style="border-color:#4CAF50;">
          <tr bgcolor="#a0d1c5">
            <th style="text-align:left">Product name</th>
            <th style="text-align:left">Unit price</th>
            <th style="text-align:left">Expiration date</th>
            <th style="text-align:left">Stock status</th>
            <th style="text-align:left">Average User Rating</th>
          </tr>

          <xsl:for-each select="products/product">
            <tr>
              <td><xsl:value-of select="name"/></td>
              <td><xsl:value-of select="price"/></td>
              <td><xsl:value-of select="expirationDate"/></td>
              <td><xsl:value-of select="stock"/></td>
              <td><xsl:value-of select="ratings"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
