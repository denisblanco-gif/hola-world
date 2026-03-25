import datetime

def main():
    name = input("Enter your name: ")
    print(f"Hello {name}!")
    print(f"Today's date is: {datetime.date.today().strftime('%A, %B %d, %Y')}")

if __name__ == "__main__":
    main()
