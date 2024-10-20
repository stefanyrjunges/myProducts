function displayProducts(){
    document.getElementById("iframeContainer").style.display = "block";
    document.getElementById("productDetails").style.display = "none";
}

const xmlString = `
<products>
    <product id="000-01">
        <name>EcoGlow Moisturizing Cream</name>
        <price>22.50</price>
        <expirationDate>Feb 2026</expirationDate>
        <stock>In stock</stock>
        <ratings>4</ratings>
    </product>
    <product id="000-02">
        <name>Radiant Vitamin C Serum</name>
        <price>10.80</price>
        <expirationDate>Jun 2026</expirationDate>
        <stock>In stock</stock>
        <ratings>4</ratings>
    </product>
    <product id="000-03">
        <name>AquaMist Facial Hydration</name>
        <price>35</price>
        <expirationDate>Aug 2027</expirationDate>
        <stock>Pre-order</stock>
        <ratings>4.5</ratings>
    </product>
    <product id="000-04">
        <name>ClearSkin Mask</name>
        <price>9.50</price>
        <expirationDate>July 2026</expirationDate>
        <stock>Out of stock</stock>
        <ratings>3.5</ratings>
    </product>
    <product id="000-05">
        <name>LuminEssence Toner</name>
        <price>15.45</price>
        <expirationDate>July 2025</expirationDate>
        <stock>In stock</stock>
        <ratings>4.2</ratings>
    </product>
    <product id="000-06">
        <name>Smooth Skin Scrub</name>
        <price>20</price>
        <expirationDate>Dec 2025</expirationDate>
        <stock>Out of stock</stock>
        <ratings>3.9</ratings>
    </product>
    <product id="000-07">
        <name>Boost Anti-Aging Night Cream</name>
        <price>37.50</price>
        <expirationDate>Dec 2026</expirationDate>
        <stock>In stock</stock>
        <ratings>4.8</ratings>
    </product>
    <product id="000-08">
        <name>HiSkin Hyaluronic Acid Serum</name>
        <price>12.35</price>
        <expirationDate>Jan 2027</expirationDate>
        <stock>Pre-order</stock>
        <ratings>4</ratings>
    </product>
    <product id="000-09">
        <name>MaxProtect Sunscreen SPF 50</name>
        <price>16.70</price>
        <expirationDate>May 2026</expirationDate>
        <stock>In stock</stock>
        <ratings>3.4</ratings>
    </product>
    <product id="000-10">
        <name>RenewSkin Enzyme Exfoliant</name>
        <price>25</price>
        <expirationDate>Mar 2027</expirationDate>
        <stock>In stock</stock>
        <ratings>4.3</ratings>
    </product>
</products>
        `;

        function searchID() {
            document.getElementById("iframeContainer").style.display = "none";

            const productId = document.getElementById("query").value.trim();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "text/xml");
            const products = xmlDoc.getElementsByTagName("product");
            let productFound = false;

            for (let i = 0; i < products.length; i++) {
                const id = products[i].getAttribute("id");
                
                if (id === productId) {
                    const name = products[i].getElementsByTagName("name")[0].textContent;
                    const price = products[i].getElementsByTagName("price")[0].textContent;
                    const expirationDate = products[i].getElementsByTagName("expirationDate")[0].textContent;
                    const stock = products[i].getElementsByTagName("stock")[0].textContent;
                    const ratings = products[i].getElementsByTagName("ratings")[0].textContent;

                    document.getElementById("productInfo").innerHTML =
                        `<br><h2 style="color:#f58634">Product ${id}</h2>
                        <strong> ${name} </strong><br>
                        <strong>Price:</strong> €${price} <br>
                        <strong>Expiration Date:</strong> ${expirationDate} <br>
                        <strong>Stock Status:</strong> ${stock} <br>
                        <strong>Average User Rating:</strong> ${ratings}/5`;

                    document.getElementById("productDetails").style.display = "block";

                    productFound = true;
                    break;
                }
            }

            if (!productFound) {
                document.getElementById("productDetails").style.display = "block"; 
                document.getElementById("productInfo").innerHTML = "<br>We couldn't find a match to this ID :( Please try again!";
            
            }
        }