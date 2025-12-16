export const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/mashuq-resume(full-stack).pdf';
    link.download = 'Mashuq-Resume.pdf';
    link.click();
  }