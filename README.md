<h4 align="center">
  <p><a href="README_AR.md">العربية</a> | English</p>
</h4>

<h2 align="center" style="font-size: 10px;">Shizuku Auto Starter</h2>

<h3>What does this module do</h3>
<p>This module automatically starts Shizuku at device boot. No need to open the app or run commands manually.</p>

<h3>What is this project</h3>
<p>
A simple Shell-based module. When installed, it auto-runs <code>service.sh</code> after every boot.<br>
The script looks for <code>libshizuku.so</code> (from the Shizuku app) and runs it.
</p>

<h3>How it works</h3>
<ol>
  <li>Waits for the system to fully boot.</li>
  <li>Waits 5 more seconds.</li>
  <li>Searches for <code>libshizuku.so</code> under <code>/data/app/</code>.</li>
  <li>If found:
    <ul>
      <li>Makes it executable.</li>
      <li>Executes it.</li>
    </ul>
  </li>
  <li>Logs everything into <code>shizuku_exec.log</code>.</li>
</ol>

<h3>Requirements</h3>
<ul>
  <li>Android device with root access</li>
  <li>Shizuku app installed</li>
</ul>

<h3>Tested On</h3>
<ul>
  <li>Redmi Note 11 SE (Rooted using Magisk)
  </li>
</ul>

<h3>Important Notes</h3>
<ul>
  <li>Only tested on Magisk</li>
  <li>Not guaranteed to work on KernelSU, APatch, or other custom environments</li>
  <li>Use outside Magisk at your own risk</li>
</ul>

<h3>Module Files</h3>
<div align="center">
  <table width="80%" cellspacing="0" cellpadding="8" style="table-layout: fixed;">
    <thead>
      <tr>
        <th align="center" width="50%">File</th>
        <th align="center" width="50%">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td align="center"><code>service.sh</code></td>
        <td align="center">Main script – auto-runs after boot</td>
      </tr>
      <tr>
        <td align="center"><code>shizuku_exec.log</code></td>
        <td align="center">Log file – created automatically</td>
      </tr>
      <tr>
        <td align="center"><code>module.prop</code></td>
        <td align="center">Metadata file for Magisk module</td>
      </tr>
    </tbody>
  </table>
</div>
