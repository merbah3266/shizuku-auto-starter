<h2>اللغات</h2>

<ul align="right">
  <li><a href="README.md">English</a></li>
  <li>العربية</li>
</ul>

<h2 align="center">مشغل Shizuku التلقائي</h2>

<h3>ما الذي تقوم به هذه الوحدة؟</h3>
<p>
تقوم هذه الوحدة بتشغيل Shizuku تلقائيًا عند إقلاع الجهاز. لا حاجة لفتح التطبيق أو تنفيذ أوامر يدويًا.
</p>

<h3>ما هو هذا المشروع؟</h3>
<p>
وحدة بسيطة مبنية باستخدام Shell. عند تثبيتها، تقوم تلقائيًا بتشغيل <code>service.sh</code> بعد كل إعادة تشغيل للجهاز.<br>
يبحث السكربت عن <code>libshizuku.so</code> (الخاص بتطبيق Shizuku) ويقوم بتنفيذه.
</p>

<h3>كيف تعمل؟</h3>
<ol>
  <li>ينتظر إقلاع النظام بالكامل.</li>
  <li>ينتظر 5 ثوانٍ إضافية.</li>
  <li>يبحث عن <code>libshizuku.so</code> داخل <code>/data/app/</code>.</li>
  <li>إذا وُجد:
    <ul type="disc">
      <li>يمنحه صلاحية التنفيذ.</li>
      <li>يقوم بتنفيذه.</li>
    </ul>
  </li>
  <li>يسجل كل شيء في <code>shizuku_exec.log</code>.</li>
</ol>

<h3>المتطلبات</h3>
<ul>
  <li>جهاز أندرويد بصلاحيات root</li>
  <li>تطبيق Shizuku مثبت</li>
</ul>

<h3>تم اختباره على</h3>
<ul>
  <li align="right">Redmi Note 11 SE (مروّت باستخدام Magisk)</li>
</ul>

<h3>ملاحظات مهمة</h3>
<ul>
  <li>تم اختباره فقط على Magisk</li>
  <li>لا أضمن عمله على KernelSU أو APatch أو أي بيئة مخصصة أخرى</li>
  <li>استخدامه خارج Magisk على مسؤوليتك الخاصة</li>
</ul>

<h3>ملفات الوحدة</h3>
<div align="center">
  <table style="width: 80%; table-layout: fixed; border: 1px solid transparent; border-collapse: collapse;" cellspacing="0" cellpadding="8">
    <thead>
      <tr>
        <th style="width: 50%; text-align: center;">الملف</th>
        <th style="width: 50%; text-align: center;">الوصف</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="width: 50%; text-align: center;"><code>service.sh</code></td>
        <td style="width: 50%; text-align: center;">السكريبت الأساسي – يعمل تلقائيًا بعد الإقلاع</td>
      </tr>
      <tr>
        <td style="width: 50%; text-align: center;"><code>shizuku_exec.log</code></td>
        <td style="width: 50%; text-align: center;">ملف السجل – يُنشأ تلقائيًا</td>
      </tr>
      <tr>
        <td style="width: 50%; text-align: center;"><code>module.prop</code></td>
        <td style="width: 50%; text-align: center;">ملف التعريف الخاص بوحدة Magisk</td>
      </tr>
    </tbody>
  </table>
</div>
