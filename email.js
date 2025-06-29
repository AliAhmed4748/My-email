document.getElementById('emailForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('userName').value;
  const company = document.getElementById('companyName').value;
  const product = document.getElementById('product').value;
  const purpose = document.getElementById('purpose').value;
  const tone = document.getElementById('tone').value;

  let email = generateEmail(name, company, product, purpose, tone);
  document.getElementById('output').value = email;
});

function generateEmail(name, company, product, purpose, tone) {
  let intro = "";
  let body = "";
  let close = "";

  if (purpose === "b2b") {
    intro = `Dear ${company} Team,\n\n`;
    body = `I came across your ${product} and was really impressed. I'm ${name} from Time Sharp Ltd, and I believe there's a great B2B opportunity between us.\n\nCould you please share your bulk pricing, MOQ, and shipping options?\n`;
    close = "Looking forward to your response.\n\nBest regards,\n" + name;
  }

  if (tone === "friendly") {
    intro = "Hi there,\n\n";
    body = body.replace("Dear", "Hi");
    close = "Cheers,\n" + name;
  } else if (tone === "bold") {
    body = body.replace("I believe", "I'm confident");
  }

  return intro + body + close;
}

function copyToClipboard() {
  const output = document.getElementById("output");
  output.select();
  document.execCommand("copy");
  alert("Email copied to clipboard!");
}
