<h1>XML Product Management System with XSLT Transformation</h1>

<p>This project was developed as part of the <strong>Web App Development</strong> module during my second year in the Computer Science program.
It's a straightforward web application that displays a collection of skincare products. Users can either search for a product by its unique ID or view all available products in a formatted HTML table.</p>

<h2>Features</h2>
<ul>
    <li>Search functionality by product ID.</li>
    <li>Display of all products in a structured table format.</li>
    <li>XML data management for product details.</li>
    <li>XSD schema for data validation.</li>
    <li>XSLT for transforming XML data into HTML.</li>
    <li>Responsive design using Bootstrap.</li>
</ul>

<h2>Project Overview</h2>
<p>The project consists of:</p>
<ul>
    <li><strong>XML</strong> for product data.</li>
    <li><strong>XSD Schema</strong> to validate the structure of the product data.</li>
    <li><strong>XSL Stylesheet</strong> to transform the XML data into an HTML table.</li>
    <li><strong>JavaScript</strong> for product search functionality.</li>
    <li><strong>HTML</strong> for the web interface with Bootstrap integration.</li>
    <li><strong>CSS</strong> for custom styling.</li>
</ul>

<h2>Installation</h2>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/yourusername/stefany-skincare-collection.git</code></pre>
    </li>
    <li>Navigate to the project directory:
        <pre><code>cd stefany-skincare-collection</code></pre>
    </li>
    <li>Open the <strong>index.html</strong> file in your web browser to view the application.</li>
</ol>

<h2>Usage</h2>
<p>To use the application:</p>
<ul>
    <li><strong>Search by ID:</strong> Enter a product ID (e.g., <code>000-01</code>) in the search box and click the "Search" button to find details about the product.</li>
    <li><strong>Display All Products:</strong> Click the "Display all available products" button to see a complete list of skincare products.</li>
</ul>

<h2>Project Structure</h2>
<pre><code>
stefany-skincare-collection/
├── index.html          # Main HTML file
├── style.css           # Custom CSS styles
├── javascript.js       # JavaScript for functionality
├── myProducts.xml      # XML file containing product data
├── myProductsSchema.xsd # XSD file for XML validation
└── myProductsHTML.xsl  # XSLT file for XML to HTML transformation
</code></pre>

<h2>XML Structure</h2>
<p>The <strong>myProducts.xml</strong> file contains the product catalog for Stefany's skincare line. Each product has the following attributes and details:</p>
<ul>
    <li><strong>id</strong>: A unique identifier for the product.</li>
    <li><strong>name</strong>: The name of the product.</li>
    <li><strong>price</strong>: The price in euros.</li>
    <li><strong>expirationDate</strong>: The product's expiration date.</li>
    <li><strong>stock</strong>: The stock availability (In stock, Out of stock, or Pre-order).</li>
    <li><strong>ratings</strong>: The average user rating out of 5.</li>
</ul>

<h3>Example Product Structure</h3>
<pre><code>
<product id="000-01">
    <name>EcoGlow Moisturizing Cream</name>
    <price>22.50</price>
    <expirationDate>2026-02-01</expirationDate>
    <stock>In stock</stock>
    <ratings>4.0</ratings>
</product>
</code></pre>

<h2>XSD Schema</h2>
<p>The <strong>myProductsSchema.xsd</strong> file defines the structure and validation rules for the <strong>myProducts.xml</strong> file. It ensures that:</p>
<ul>
    <li><strong>price</strong> is a decimal value greater than or equal to 0.</li>
    <li><strong>ratings</strong> is a decimal between 0.0 and 5.0.</li>
    <li><strong>expirationDate</strong> is in the correct date format.</li>
    <li>Each product has a required <strong>id</strong> attribute.</li>
</ul>

<h2>XSL Stylesheet</h2>
<p>The <strong>myProductsHTML.xsl</strong> file transforms the XML data into an HTML table. It formats the product details into a user-friendly table layout, where each row represents a product with columns for:</p>
<ul>
    <li>Product name</li>
    <li>Unit price</li>
    <li>Expiration date</li>
    <li>Stock status</li>
    <li>Average user rating</li>
</ul>
