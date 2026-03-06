function saveContact(name, phone, email = "", department = "", company = "한국도로공사서비스") {

  // 성 / 이름 분리 (한국 이름 기준)
  const lastName = name.charAt(0);
  const firstName = name.substring(1);

  const vCardData =
`BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;;
FN:${company} ${name}
ORG:${company};${department}
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
