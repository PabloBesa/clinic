/* Single source of truth for the clinic/doctor identity strings used in the
   header, footer, and signature block of every patient-facing document.
   Plain script (not a Design Component) — safe to hand-edit directly. */
window.CLINIC_ID = {
  doctorName: "Dr. Pablo Besa Vial",
  doctorSignature: "Pablo Besa Vial",
  doctorRut: "16.371.014-5",
  specialty: "Traumatología de Rodilla",
  clinicName: "Centro Médico UC CHRISTUS",
  web: "ucchristus.cl",
  addr1: "C. Médico Santa Lucía — Alameda 420, Santiago",
  addr2: "C. Médico San Joaquín — Av. Vicuña Mackenna 4686, San Joaquín",
  phone: "22 676 7000",
  email: "pjbesa@uc.cl",
  get footerLine() {
    return `UC CHRISTUS · ${this.web} · ${this.addr1} · ${this.addr2} · Reserva de horas: ${this.phone} · ${this.email}`;
  },
};
