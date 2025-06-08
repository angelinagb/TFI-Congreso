// certificado.js
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('generarCertificado');
  if (!btn) return;

  btn.addEventListener('click', async function (e) {
    e.preventDefault();
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'landscape' });

    // Obtener el nombre desde el span visible
    const nombre =
      document.getElementById('userName')?.textContent.trim() ||
      document.getElementById('asistenteName')?.textContent.trim() ||
      document.getElementById('expositorName')?.textContent.trim() ||
      'Participante';

    const rol = this.getAttribute('data-rol') || 'Asistente';
    const fecha = '25 de Octubre de 2026';

    const azul = [36, 100, 136];

    doc.setFillColor(245, 245, 245);
    doc.rect(0, 0, 297, 210, 'F');

    doc.setLineWidth(2);
    doc.setDrawColor(...azul);
    doc.rect(10, 10, 277, 190);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(26);
    doc.setTextColor(...azul);
    doc.text('CERTIFICADO DE PARTICIPACIÓN', 148.5, 50, { align: 'center' });

    doc.setFontSize(14);
    doc.setTextColor(33, 33, 33);
    doc.text('VII Encuentro de Gestores Tecnológicos 2026', 148.5, 65, { align: 'center' });

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Se deja constancia que`, 40, 90);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(...azul);
    doc.text(nombre, 40, 100);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(33, 33, 33);
    doc.text(`ha participado como ${rol} en el congreso realizado en Mar del Plata,`, 40, 110);
    doc.text(`Buenos Aires, Argentina, el día ${fecha}.`, 40, 120);

    doc.line(40, 150, 100, 150);
    doc.setFontSize(10);
    doc.text('Coordinación - RedGTech', 40, 155);

    const logo = new Image();
    logo.src = '../images/redgtech_logo.png';
    logo.onload = () => {
      doc.addImage(logo, 'PNG', 225, 25, 50, 50);
      doc.save(`Certificado_${rol}_${nombre.replace(/\s+/g, '_')}.pdf`);
    };

    logo.onerror = () => {
      doc.save(`Certificado_${rol}_${nombre.replace(/\s+/g, '_')}.pdf`);
    };
  });
});
