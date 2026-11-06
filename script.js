/* Render the page from the editable content in content.js. */
const content = SITE_CONTENT;
const $ = selector => document.querySelector(selector);
const setText = (selector, value) => { $(selector).textContent = value; };
const setLink = (selector, href, text) => {
  const link = $(selector);
  link.href = href;
  link.textContent = text;
};

setText("#brandName", content.brand.name);
setText("#brandTagline", content.brand.tagline);
$("#mainNav").setAttribute("aria-label", content.brand.navLabel);
setText("#navItinerary", content.brand.navItinerary);
setText("#navPackage", content.brand.navPackage);
setText("#navContact", content.brand.navContact);
setText("#footerBrand", content.brand.name);
setText("#footerTagline", content.brand.tagline);
setText("#copyrightBrand", content.brand.name);
setText("#year", new Date().getFullYear());
setText("#footerNote", content.footerNote);

setText("#heroEyebrow", content.hero.eyebrow);
setText("#heroTitle", content.hero.title);
setText("#heroDescription", content.hero.description);
setText("#heroItineraryCta", content.hero.itineraryCta);
setText("#heroLocation", content.hero.location);
setText("#heroCoordinates", content.hero.coordinates);
const heroImage = $("#heroImage");
heroImage.src = content.hero.image;
heroImage.alt = content.hero.imageAlt;
setText("#heroImageCaption", content.hero.imageCaption);
setLink("#heroCall", `tel:${content.hero.phone.replace(/\s/g, "")}`, `Call ${content.hero.phone}`);

const facts = $("#heroFacts");
content.hero.facts.forEach(fact => {
  const item = document.createElement("div");
  item.className = "hero-fact";
  const value = document.createElement("strong");
  value.textContent = fact.value;
  const label = document.createElement("span");
  label.textContent = fact.label;
  item.append(value, label);
  facts.append(item);
});

setText("#introEyebrow", content.introduction.eyebrow);
setText("#introTitle", content.introduction.title);
setText("#introCopy", content.introduction.copy);
setText("#itineraryEyebrow", content.itinerary.eyebrow);
setText("#itineraryTitle", content.itinerary.title);
setText("#itineraryDescription", content.itinerary.description);
const itineraryImage = $("#itineraryImage");
itineraryImage.src = content.itinerary.image;
itineraryImage.alt = content.itinerary.imageAlt;
setText("#itineraryImageCaption", content.itinerary.imageCaption);

const itineraryList = $("#itineraryList");
content.itinerary.days.forEach((day, index) => {
  const item = document.createElement("li");
  item.className = "itinerary-day";
  const marker = document.createElement("span");
  marker.className = "day-marker";
  marker.setAttribute("aria-hidden", "true");
  marker.textContent = String(index + 1).padStart(2, "0");

  const copy = document.createElement("div");
  copy.className = "day-copy";
  const timing = document.createElement("p");
  timing.className = "day-timing";
  timing.textContent = `${day.day} / ${day.timing}`;
  const title = document.createElement("h3");
  title.textContent = day.title;
  const details = document.createElement("p");
  details.textContent = day.details;
  copy.append(timing, title, details);
  item.append(marker, copy);
  itineraryList.append(item);
});

setText("#packageEyebrow", content.package.eyebrow);
setText("#packageTitle", content.package.title);
setText("#packageDescription", content.package.description);
setText("#offerLabel", content.package.offerLabel);
setText("#packagePrice", content.package.price);
setText("#priceCaption", content.package.priceCaption);
setText("#bookingAmount", content.package.bookingAmount);
setText("#bookingLabel", content.package.bookingLabel);
setText("#inclusionsTitle", content.package.inclusionsTitle);
setText("#departuresTitle", content.package.departuresTitle);
setText("#availabilityNote", content.package.availabilityNote);
setText("#priceDisclaimer", content.package.priceDisclaimer);
setText("#packageCta", content.package.cta);

const inclusions = $("#inclusions");
content.package.inclusions.forEach(inclusion => {
  const item = document.createElement("li");
  item.textContent = inclusion;
  inclusions.append(item);
});

const departures = $("#departureDates");
content.package.departureDates.forEach(date => {
  const item = document.createElement("li");
  item.textContent = date;
  departures.append(item);
});

const whatsappMessage = encodeURIComponent("Hi, I'm interested in the McLeodganj and Triund trek. Could you share current availability and booking details?");
const whatsappUrl = `https://wa.me/${content.contact.phone.replace(/\D/g, "")}?text=${whatsappMessage}`;
setLink("#packageCta", whatsappUrl, content.package.cta);
setLink("#whatsappLink", whatsappUrl, `WhatsApp ${content.contact.phone}`);
$("#whatsappLink").target = "_blank";
$("#whatsappLink").rel = "noopener noreferrer";
setLink("#emailLink", `mailto:${content.contact.email}`, content.contact.email);
setText("#contactTitle", content.contact.title);
setText("#contactEyebrow", content.contact.eyebrow);
setText("#contactDescription", content.contact.description);
setText("#contactHours", content.contact.hours);
