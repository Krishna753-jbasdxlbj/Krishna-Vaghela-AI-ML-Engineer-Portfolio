// function for cv downloading
export const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/krishnavaghelaresume.pdf';  // lowercase — matches Vercel
  link.download = 'Krishna_Vaghela_Resume.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  link.remove();
};