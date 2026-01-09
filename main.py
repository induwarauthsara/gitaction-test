import sys

def magic_math(a, b):
    return a + b

if __name__ == "__main__":
    # A simple test case
    if magic_math(2, 2) == 4:
        print(f"✅ Success! Running on Python {sys.version}")
    else:
        print("❌ Failed!")
        exit(1) # This tells GitHub Actions the job failed