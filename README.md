<p align="center"><a href="README_AR.md">العربية</a> | English</p>

---

# Shizuku Auto Start - Shell Module

#**What does this module do**

This module automatically starts Shizuku at device boot. No need to open the app or run commands manually.

**What is this project**

A simple Shell-based module. When installed, it auto-runs `service.sh` after every boot.  
The script looks for `libshizuku.so` (from the Shizuku app) and runs it.

**How it works**

1. Waits for the system to fully boot.  
2. Waits 5 more seconds.  
3. Searches for `libshizuku.so` under `/data/app/`.  
4. If found:  
   - Makes it executable.  
   - Executes it.  
5. Logs everything into `shizuku_exec.log`.

**Requirements**

- Android device with root access  
- Shizuku app installed  
- Shell tools like: `getprop`, `find`, `chmod`, `tee`

**Tested On**

- Redmi Note 11 SE  
  - Rooted using Magisk

**Important Notes**

- Only tested on Magisk  
- Not guaranteed to work on KernelSU, APatch, or other custom environments  
- Use outside Magisk at your own risk

**Module Files**

| File               | Description                             |
|--------------------|-----------------------------------------|
| `service.sh`       | Main script – auto-runs after boot      |
| `shizuku_exec.log` | Log file – created automatically        |
| `module.prop`      | Metadata file for Magisk module         |
