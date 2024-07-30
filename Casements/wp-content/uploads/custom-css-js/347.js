<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
document.addEventListener("DOMContentLoaded", function() {
    const footerCredit = document.querySelector('.wp-block-kubio-copyright p');
    if (footerCredit) {
        const currentYear = new Date().getFullYear();
        footerCredit.innerHTML = `© ${currentYear} Casements Africa Ltd.`;
    }
});



/* Default comment here */ 

</script>
<!-- end Simple Custom CSS and JS -->
