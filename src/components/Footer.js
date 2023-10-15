const Footer = () => {
  return (
    <footer>
    <div class="container px-6 py-8 mx-auto border-t-4 border-primary">
        <div class="flex flex-col items-center text-center">
            <img class="w-auto h-12" src="./images/main_logo.png" alt="footer" />
        </div>

        <hr class="my-6 border-gray-200 md:my-10 " />

        <div class="flex flex-col items-center sm:flex-row sm:justify-between">
            <p class="text-sm text-gray-500 ">© Copyright 2023. All Rights Reserved.</p>

            <div class="flex -mx-2">
            <img src="./images/instagram.png" className="w-6 h-6" />
            </div>
        </div>
    </div>
</footer>
  );
};

export default Footer;
