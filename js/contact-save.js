function saveContact(name, phone, email = "", company = "한국도로공사서비스") {

  const vCardData =
`BEGIN:VCARD
VERSION:3.0

N:한국도로공사서비스;${name};;;;
TEL;TYPE=CELL:${phone}
EMAIL:${email}
END:VCARD`;

  const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = name + ".vcf";
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
