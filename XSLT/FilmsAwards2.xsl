<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <style>
          table {
            border-collapse: collapse;
            width: 100%;
            background-color: white;
          }
          th, td {
            text-align: left;
            padding: 8px;
            border: 2px solid black;
			white-space: nowrap;
          }
        </style>
      </head>
      <body>
        <h2>Films Awards</h2>
        <table>
          <tr>
            <th>Category</th>
            <th>Name Award</th>
            <th>Work</th>
          </tr>
          <!-- Loop -->
          <xsl:for-each select="//awards/award/nomination">
		  <tr>
				<!-- Display the "category" -->
				<td>
				<xsl:value-of select="category"/>
				</td>
				<!-- Display the corresponding "nameAward" -->
				<td>
				<xsl:value-of select="../nameAward"/>
				</td>
				<!-- Display the "work" -->
				<td>
				<xsl:value-of select="work"/>
				</td>
				</tr>
		  <xsl:for-each/>
        </table>
      </body>
    </html>
  </xsl:template>


</xsl:stylesheet>
