# File-Manager

Basic Scope:

General -+6 Application accepts username and prints proper message -+10 Application exits if user pressed ctrl+c or sent .exit command and proper message is printed - done

Operations fail
+20 Attempts to perform an operation on a non-existent file or work on a non-existent path result in the operation fail
+10 Operation fail doesn't crash application

Navigation & working directory operations implemented properly
+10 Go upper from current directory - done
+10 Go to dedicated folder from current directory - done
+10 List all files and folders in current directory - done

Basic operations with files implemented properly
+10 Read file and print it's content in console
+10 Create empty file
+10 Rename file
+10 Copy file
+10 Move file
+10 Delete file

Operating system info (prints following information in console) implemented properly
+6 Get EOL (default system End-Of-Line)
+10 Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them)
+6 Get home directory
+6 Get current system user name (Do not confuse with the username that is set when the application starts)
+6 Get CPU architecture for which Node.js binary has compiled

Hash calculation implemented properly
+20 Calculate hash for file

Compress and decompress operations
+20 Compress file (using Brotli algorithm)
+20 Decompress file (using Brotli algorithm)

Advanced Scope:

+50 All files operations with reading/writing should be performed using Streams API
+20 Codebase is written in ESM modules instead of CommonJS
+20 Codebase is separated (at least 7 modules)
