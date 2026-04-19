function calculate() {
  const salary = Math.max(
    0,
    parseFloat(document.getElementById("totalSalary").value) || 0,
  );
  const sector = document.getElementById("sector").value;
  const dayOT = Math.max(
    0,
    parseFloat(document.getElementById("dayOT").value) || 0,
  );
  const nightOT = Math.max(
    0,
    parseFloat(document.getElementById("nightOT").value) || 0,
  );
  const rests = Math.max(
    0,
    parseFloat(document.getElementById("restDays").value) || 0,
  );
  const holidays = Math.max(
    0,
    parseFloat(document.getElementById("holidays").value) || 0,
  );

  if (salary === 0) {
    alert("برجاء إدخال الراتب أولاً");
    return;
  }

  const dailyRate = salary / 30;
  const hourlyRate = sector === "industrial" ? dailyRate / 7 : dailyRate / 8;

  // حساب كل بند بشكل منفصل تماماً
  const dayOTPay = dayOT * hourlyRate * 1.35;
  const nightOTPay = nightOT * hourlyRate * 1.7;
  const restsPay = rests * dailyRate;
  const holidaysPay = holidays * (dailyRate * 2);

  const grandTotal = salary + dayOTPay + nightOTPay + restsPay + holidaysPay;

  // عرض النتائج بدقة 0.00
  document.getElementById("resDaily").innerText = dailyRate.toFixed(2);
  document.getElementById("resHourly").innerText = hourlyRate.toFixed(2);
  document.getElementById("resDayOT").innerText = dayOTPay.toFixed(2);
  document.getElementById("resNightOT").innerText = nightOTPay.toFixed(2);
  document.getElementById("resTotalRests").innerText = restsPay.toFixed(2);
  document.getElementById("resTotalHolidays").innerText =
    holidaysPay.toFixed(2);

  // الإجمالي النهائي
  document.getElementById("resTotal").innerText = grandTotal.toLocaleString(
    "en-US",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  );

  document.getElementById("result").style.display = "block";
  document.getElementById("result").scrollIntoView({ behavior: "smooth" });
}
