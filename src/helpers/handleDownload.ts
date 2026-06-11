// function for cv downloading
export const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/KrishnaVaghelaResume.pdf';
  link.download = 'KrishnaVaghelaResume.pdf';
  document.body.appendChild(link);
  link.click();
  link.remove();
};
