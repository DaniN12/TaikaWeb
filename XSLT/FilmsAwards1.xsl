<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>AwardsFilms.xsl</title>
                <style>
                    table {
                        border-collapse: collapse;
                        width: 100%;
                        background-color: white;
                    }
                    th, td {
                        border: 2px solid black;
                        padding: 8px;
                        text-align: left;
                    }
                </style>
            </head>
            <body>
                <table>
                    <tr>
                        <th>Film</th>
                        <th>Nº of nominations</th>
                        <th>Nº of victories</th>
                    </tr>
                    <!-- Looping through each "film" element -->
                    <xsl:for-each select="//film">
                        <tr>
                            <td>
                                <!-- Display the film name -->
                                <xsl:value-of select="name"/>
                            </td>
                            <td>
                                <!-- Count the number of nominations for the current film -->
                                <xsl:value-of select="count(awards/award/nomination)"/>
                            </td>
                            <td>
                                <!--
                                    We store the current nomination ID in a variable,
                                    then count the number of victories for the film using the stored ID
                                -->
                                <xsl:variable name="pId" select="awards/award/nomination/@id"/>
                                <xsl:value-of select="count(/root/awards/award/nomination[@id=$pId]/result[Won]"/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
