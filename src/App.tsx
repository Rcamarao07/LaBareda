import { motion } from 'motion/react';
import { Flame, MapPin, Clock, Phone, Calendar, Wind, Truck, Wine, ShoppingBag, Wifi, CreditCard, Globe, Instagram, Facebook, Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

const t = {
  pt: {
    nav: { about: "Sobre", gallery: "Galeria", reserve: "Reservas", menu: "Menu" },
    hero: { category: "Cozinha Americana e Brasileira", book: "Reserve Agora" },
    about: { label: "01. Sobre Nós", title1: "AMOR PELA", title2: "COMIDA", p1: "No Labareda Steakhouse, damos-lhe as boas-vindas a Mafra!", p2: "Desfrute da nossa deliciosa comida no conforto da sua casa, através da nossa opção de takeaway. O nosso espaço dispõe de ar condicionado e Wi-Fi gratuito para a sua comodidade.", tk_title: "Takeaway", tk_desc: "No conforto da sua casa.", ev_title: "Eventos", ev_desc: "Serviços premium para o seu evento." },
    services: { pre: "Os nossos", title: "Serviços", air: "Ar condicionado", delivery: "Entregas", events: "Eventos privados", takeaway: "Takeaway", wifi: "Wi-Fi gratuito" },
    gallery: { label: "03. Galeria", title: "PRATOS & ESPAÇO", snacks: "Petiscos", main: "Pratos Principais", desserts: "Sobremesas", drinks: "Bebidas" },
    reserve: { title: "RESERVAR", desc: "Junte-se a nós para uma experiência inesquecível de carne e fumo. Aconselhamos reserva antecipada, especialmente aos fins de semana.", loc: "Localização", hrs: "O Nosso Horário de Funcionamento", mon: "Segunda", tue: "Terça", wed: "Quarta", thu: "Quinta", fri: "Sexta", sat: "Sábado", sun: "Domingo", closed: "Encerrado", cnt: "Contacto", pym: "Opções de pagamento", pym_desc: "Numerário, Multibanco, Visa, Mastercard", name: "Nome", name_pl: "O seu nome", phone: "Telemóvel", date: "Data", ppl: "Pessoas", msg: "Mensagem (Opcional)", msg_pl: "Alguma restrição alimentar?", req: "Pedir Reserva", copy: "Labareda Smoke House. Todos os direitos reservados.", social: "Redes Sociais", privacy: "Privacidade", legal: "Informação Legal" },
    menu: { title: "MENU", back: "← Voltar" }
  },
  en: {
    nav: { about: "About", gallery: "Gallery", reserve: "Reservations", menu: "Menu" },
    hero: { category: "American & Brazilian Cuisine", book: "Book Now" },
    about: { label: "01. About Us", title1: "LOVE FOR", title2: "FOOD", p1: "Everyone at Labareda Steakhouse welcomes you to Mafra!", p2: "Enjoy our delicious food in the comfort of your home, with our takeaway option. Our establishment has air conditioning and free Wi-Fi for your convenience.", tk_title: "Takeaway", tk_desc: "In the comfort of your home.", ev_title: "Events", ev_desc: "Premium services for your event." },
    services: { pre: "Our", title: "Services", air: "Air conditioning", delivery: "Delivery", events: "Private events", takeaway: "Takeaway", wifi: "Free Wi-Fi" },
    gallery: { label: "03. Gallery", title: "OUR FOOD & VIBE", snacks: "Starters", main: "Main Courses", desserts: "Desserts", drinks: "Drinks" },
    reserve: { title: "RESERVE", desc: "Join us for an unforgettable meat and smoke experience. We advise booking in advance, especially on weekends.", loc: "Location", hrs: "Our Opening Hours", mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday", closed: "Closed", cnt: "Contact", pym: "Payment Options", pym_desc: "Cash, Debit, Visa, Mastercard", name: "Name", name_pl: "Your name", phone: "Phone", date: "Date", ppl: "People", msg: "Message (Optional)", msg_pl: "Any dietary restrictions?", req: "Request Reservation", copy: "Labareda Smoke House. All rights reserved.", social: "Socials", privacy: "Privacy", legal: "Legal Info" },
    menu: { title: "MENU", back: "← Back" }
  }
};

const menuData = {
  pt: [
    {
      category: "COUVERT",
      items: [
        { name: "Pão", price: "1,50" },
        { name: "Azeitona", price: "1,20" },
        { name: "Queijo", price: "3,00" },
        { name: "Manteiga", price: "1,50" }
      ]
    },
    {
      category: "PETISCOS",
      items: [
        { name: "Tiras de choco", price: "5,70" },
        { name: "Camarão Torpedo panado", price: "5,90" },
        { name: "Cebolas panadas", price: "2,90" },
        { name: "Asinhas BBQ", price: "5,60" },
        { name: "Croquete de carne fumada", desc: "uni", price: "2,00" },
        { name: "Batata frita com Pulled Pork, cheddar e bacon", price: "5,90" },
        { name: "Batata frita com cheddar, bacon, cebola frita", price: "5,60" }
      ]
    },
    {
      category: "HAMBÚRGUERES",
      desc: "Acompanha batata frita",
      items: [
        { name: "CHEESE BURGER 160GR", desc: "Blend de novilho, cheddar, salada LaBareda, rúcula e molho aioli", price: "10,00" },
        { name: "LABAREDA BURGUER 160GR", desc: "Blend de novilho, cheddar, picles, cebola panada, bacon e molho BBQ", price: "12,50" },
        { name: "BACON BURGUER 160GR", desc: "Blend de novilho, bacon, cheddar, alface, tomate, cebola, molho aioli", price: "11,00" },
        { name: "GOURMET BURGUER 160GR", desc: "Blend de novilho, gorgonzola, maçã verde, cebola caramelizada e molho aioli", price: "11,50" },
        { name: "PULLED PORK BURGUER 180GR", desc: "Carne desfiada fumada com bacon, cheddar, picles, cebola frita, salada LaBareda e molho BBQ", price: "12,00" },
        { name: "VEGGIE BURGER 160GR", desc: "Cheddar, salada LaBareda, rúcula e molho aioli", price: "10,00" }
      ]
    },
    {
      category: "INFANTIL",
      items: [
        { name: "BIFINHOS DE VACA", desc: "Arroz e batata frita", price: "8,00" },
        { name: "KIDS BURGUER 130 gr", desc: "Blend de novilho com cheddar, tomate e batata frita", price: "6,90" }
      ]
    },
    {
      category: "CORTES ESPECIAIS",
      items: [
        { name: "PICANHA 250gr", desc: "Arroz, Feijão, farofa e batata frita", price: "21,70" },
        { name: "MAMINHA 250gr", desc: "Arroz, Batata frita e salada laBareda", price: "17,70" },
        { name: "CORAÇÃO DE ALCATRA 250gr", desc: "Batata frita e salada laBareda", price: "16,90" },
        { name: "LOMBO DE SALMÃO 170gr", desc: "Legumes salteados e batata ao murro", price: "16,00" },
        { name: "RIBS 340gr", desc: "Piano, Batata frita doce, salada laBareda e milho cozido", price: "17,70" },
        { name: "PERNA DE FRANGO 280gr", desc: "Batata frita, salada laBareda e milho cozido", price: "14,90" },
        { name: "COSTELA DE NOVILHO 350gr", desc: "Batata frita, salada laBareda e milho cozido", price: "18,90" },
        { name: "BRISKET 300g", desc: "Peito de boi fumado, batata frita, salada laBareda e milho cozido", price: "19,90" }
      ]
    },
    {
      category: "PARTILHAR",
      items: [
        { name: "TÁBUA 1", desc: "3 pax\nPiano, Pulled pork, coxinhas BBQ, cebola panada, batata frita doce, milho na brasa e salada LaBareda", price: "50,00" },
        { name: "TÁBUA 2", desc: "3 pax\nCostela de novilho, Maminha, pulled pork, coxinhas BBQ, batata frita, cebola panada, milho na brasa e salada LaBareda", price: "59,00" }
      ]
    },
    {
      category: "SALADAS",
      items: [
        { name: "SALADA DE FRANGO", desc: "Frango grelhado, tomate cherry, alface, rúcula, lascas de queijo, cebola frita, e molho caesar", price: "11,50" },
        { name: "SALADA DE SALMÃO FUMADO", desc: "Alface, rúcula, tomate cherry, salmão fumado, mozzarella de bufala, maçã verde, nozes e molho balsâmico crema manjericão", price: "10,50" }
      ]
    },
    {
      category: "EXTRAS",
      items: [
        { name: "Arroz", price: "2,50" },
        { name: "Farofa", price: "1,50" },
        { name: "Feijão", price: "3,00" },
        { name: "Batata frita", price: "3,00" },
        { name: "Batata doce frita", price: "3,90" },
        { name: "Salada LaBareda", price: "2,00" },
        { name: "Legumes salteados", price: "3,50" }
      ]
    },
    {
      category: "SOBREMESA",
      items: [
        { name: "BROWNIE DE CHOCOLATE", desc: "COM GELADO DE BAUNILHA E FAROFA DE CAJU", price: "5,80" },
        { name: "SOBREMESA DO DIA", price: "5,20" },
        { name: "CRUMBLE DE BANANA", desc: "COM GELADO DE BAUNILHA E CALDA DE CARAMELO", price: "5,50" }
      ]
    }
  ],
  en: [
    {
      category: "COVERS",
      items: [
        { name: "Bread", price: "1.50" },
        { name: "Olives", price: "1.20" },
        { name: "Cheese", price: "3.00" },
        { name: "Butter", price: "1.50" }
      ]
    },
    {
      category: "STARTERS",
      items: [
        { name: "Cuttlefish strips", price: "5.70" },
        { name: "Breaded Torpedo Shrimp", price: "5.90" },
        { name: "Onion Rings", price: "2.90" },
        { name: "BBQ Wings", price: "5.60" },
        { name: "Smoked meat croquette", desc: "unit", price: "2.00" },
        { name: "Fries w/ Pulled Pork, cheddar & bacon", price: "5.90" },
        { name: "Fries w/ cheddar, bacon, fried onion", price: "5.60" }
      ]
    },
    {
      category: "BURGERS",
      desc: "Served with fries",
      items: [
        { name: "CHEESE BURGER 160GR", desc: "Beef blend, Cheddar, laBareda salad, arugula and aioli sauce", price: "10.00" },
        { name: "LABAREDA BURGER 160GR", desc: "Beef blend, cheddar, pickles, breaded onion, bacon and BBQ sauce", price: "12.50" },
        { name: "BACON BURGER 160GR", desc: "Beef blend, bacon, cheddar, lettuce, tomato, onion, aioli sauce", price: "11.00" },
        { name: "GOURMET BURGER 160GR", desc: "Beef blend, gorgonzola, green apple, caramelized onion and aioli sauce", price: "11.50" },
        { name: "PULLED PORK BURGER 180GR", desc: "Smoked pulled pork w/ bacon, cheddar, pickles, fried onion, LaBareda salad and BBQ sauce", price: "12.00" },
        { name: "VEGGIE BURGER 160GR", desc: "Cheddar, laBareda salad, arugula and aioli sauce", price: "10.00" }
      ]
    },
    {
      category: "KIDS",
      items: [
        { name: "BEEF STEAKS", desc: "Rice and fries", price: "8.00" },
        { name: "KIDS BURGER 130 gr", desc: "Beef blend with cheddar, tomato and fries", price: "6.90" }
      ]
    },
    {
      category: "SPECIAL CUTS",
      items: [
        { name: "PICANHA 250gr", desc: "Rice, Beans, farofa and fries", price: "21.70" },
        { name: "MAMINHA 250gr", desc: "Rice, Fries and laBareda salad", price: "17.70" },
        { name: "RUMP HEART 250gr", desc: "Fries and laBareda salad", price: "16.90" },
        { name: "SALMON FILLET 170gr", desc: "Sautéed vegetables and punched potatoes", price: "16.00" },
        { name: "RIBS 340gr", desc: "Rack of ribs, sweet potato fries, laBareda salad and boiled corn", price: "17.70" },
        { name: "CHICKEN LEG 280gr", desc: "Fries, laBareda salad and boiled corn", price: "14.90" },
        { name: "BEEF RIBS 350gr", desc: "Fries, laBareda salad and boiled corn", price: "18.90" },
        { name: "BRISKET 300g", desc: "Smoked beef brisket, fries, laBareda salad and boiled corn", price: "19.90" }
      ]
    },
    {
      category: "TO SHARE",
      items: [
        { name: "BOARD 1", desc: "3 pax\nRack of ribs, Pulled pork, BBQ drumsticks, breaded onion, sweet potato fries, grilled corn and Labareda salad", price: "50.00" },
        { name: "BOARD 2", desc: "3 pax\nBeef ribs, Maminha, pulled pork, BBQ drumsticks, fries, breaded onion, grilled corn and Labareda salad", price: "59.00" }
      ]
    },
    {
      category: "SALADS",
      items: [
        { name: "CHICKEN SALAD", desc: "Grilled chicken, cherry tomatoes, lettuce, arugula, cheese shavings, fried onion, and caesar sauce", price: "11.50" },
        { name: "SMOKED SALMON SALAD", desc: "Lettuce, arugula, cherry tomatoes, smoked salmon, buffalo mozzarella, green apple, walnuts and balsamic basil cream sauce", price: "10.50" }
      ]
    },
    {
      category: "EXTRAS",
      items: [
        { name: "Rice", price: "2.50" },
        { name: "Farofa", price: "1.50" },
        { name: "Beans", price: "3.00" },
        { name: "Fries", price: "3.00" },
        { name: "Sweet potato fries", price: "3.90" },
        { name: "LaBareda Salad", price: "2.00" },
        { name: "Sautéed vegetables", price: "3.50" }
      ]
    },
    {
      category: "DESSERTS",
      items: [
        { name: "CHOCOLATE BROWNIE", desc: "W/ VANILLA ICE CREAM AND CASHEW NUT FAROFA", price: "5.80" },
        { name: "DESSERT OF THE DAY", price: "5.20" },
        { name: "BANANA CRUMBLE", desc: "W/ VANILLA ICE CREAM AND CARAMEL SYRUP", price: "5.50" }
      ]
    }
  ]
};

function Home({ lang, setLang, txt }: any) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-embers selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none drop-shadow-md bg-gradient-to-b from-black/50 to-transparent">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex flex-col items-center pointer-events-auto cursor-pointer">
          <svg viewBox="0 0 400 120" className="w-48 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="50%" y="60" textAnchor="middle" fill="white" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="bold" fontSize="56" letterSpacing="-1">LaBareda</text>
            <text x="50%" y="95" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" letterSpacing="6">SMOKE HOUSE</text>
          </svg>
        </motion.div>
        <div className="hidden md:flex gap-8 pointer-events-auto items-center">
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="#about" className="micro-label !text-white hover:!text-embers transition-colors">{txt.nav.about}</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="#gallery" className="micro-label !text-white hover:!text-embers transition-colors">{txt.nav.gallery}</motion.a>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="/menu" className="micro-label !text-white hover:!text-embers transition-colors block">{txt.nav.menu}</Link>
          </motion.div>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://reservation.dish.co/widget/hydra-182e0a59-9214-48a8-a727-0d8fc0ef6a88?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnF2zh07cryGqaD1F7qqwDw-X9aipx3Fgke_xfuCdN_slrnlExPqEd-DwA_cA_aem_Xp2NF-Y2vKUz7FbTl0Hj9g" target="_blank" rel="noopener noreferrer" className="micro-label !text-black bg-embers hover:bg-white px-4 py-2 rounded-full transition-colors" style={{ backgroundColor: "var(--color-embers)" }}>{txt.nav.reserve}</motion.a>
          
          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className="flex items-center gap-2 micro-label !text-white hover:!text-embers transition-colors ml-4 bg-white/10 px-3 py-1.5 rounded-full"
          >
            <Globe className="w-4 h-4" />
            <motion.span key={lang} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
              {lang === 'pt' ? 'EN' : 'PT'}
            </motion.span>
          </motion.button>
        </div>

        {/* Hamburger Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden pointer-events-auto text-white z-50 relative"
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden pt-32 pb-16"
        >
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="#about" onClick={() => setIsMobileMenuOpen(false)} className="display-title text-4xl !text-white hover:!text-embers transition-colors mt-8">{txt.nav.about}</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="display-title text-4xl !text-white hover:!text-embers transition-colors">{txt.nav.gallery}</motion.a>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="/menu" onClick={() => setIsMobileMenuOpen(false)} className="display-title text-4xl !text-white hover:!text-embers transition-colors block">{txt.nav.menu}</Link>
          </motion.div>
          
          <div className="flex flex-col items-center gap-4 mt-6">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://reservation.dish.co/widget/hydra-182e0a59-9214-48a8-a727-0d8fc0ef6a88?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnF2zh07cryGqaD1F7qqwDw-X9aipx3Fgke_xfuCdN_slrnlExPqEd-DwA_cA_aem_Xp2NF-Y2vKUz7FbTl0Hj9g" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="w-[240px] display-title text-2xl flex items-center justify-center !text-white bg-transparent border border-white/30 hover:border-embers px-8 py-3 rounded-full transition-colors">{txt.nav.reserve}</motion.a>
            
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://www.ubereats.com/pt-en/store/labareda-steakhouse/SzfuZVPAUgyKr833FsPkCw?srsltid=AfmBOoqiPy8xR2JLipp_AzSu-3wo80jEHntzoJJLuX9N2ajMLUSlndMo" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="w-[240px] display-title text-2xl flex items-center justify-center gap-2 !text-white bg-transparent border border-[#06C167] hover:bg-[#06C167] px-8 py-3 rounded-full transition-colors">
              Uber Eats <ShoppingBag className="w-5 h-5" />
            </motion.a>
            
            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => { setLang(lang === 'pt' ? 'en' : 'pt'); setIsMobileMenuOpen(false); }}
              className="flex items-center justify-center gap-2 micro-label !text-white hover:!text-embers transition-colors bg-white/10 px-6 py-3 rounded-full mt-4"
            >
              <Globe className="w-5 h-5" />
              <motion.span key={lang} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                {lang === 'pt' ? 'EN' : 'PT'}
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 w-full flex flex-col items-center justify-center overflow-hidden min-h-[70vh] md:min-h-[85vh]">
        <div className="absolute inset-0 z-0 bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,92,5,0.15),transparent_70%)] z-10"></div>
        </div>
        
        <div className="z-20 flex flex-col items-center text-center px-4 w-full max-w-7xl pt-8 md:pt-0">
          <motion.div
            key={`hero-${lang}`}
            initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="micro-label mb-6 text-embers" style={{ color: "var(--color-embers)" }}>{txt.hero.category}</span>
            <h1 className="display-title text-[15vw] md:text-[12vw] text-white">
              LABAREDA
            </h1>
            <h2 className="display-title text-[8vw] md:text-[6vw] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] -mt-2 md:-mt-6">
              SMOKEHOUSE
            </h2>
          </motion.div>

          <motion.div 
            key={`btns-${lang}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-10 md:mt-12 flex flex-col gap-4 items-center"
          >
            <a href="https://reservation.dish.co/widget/hydra-182e0a59-9214-48a8-a727-0d8fc0ef6a88?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnF2zh07cryGqaD1F7qqwDw-X9aipx3Fgke_xfuCdN_slrnlExPqEd-DwA_cA_aem_Xp2NF-Y2vKUz7FbTl0Hj9g" target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-[320px] inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white uppercase bg-transparent border border-white/30 rounded-full overflow-hidden transition-all hover:border-embers">
              <span className="absolute inset-0 w-full h-full bg-embers translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ backgroundColor: "var(--color-embers)" }}></span>
              <span className="relative flex items-center gap-2 group-hover:text-black transition-colors">
                {txt.hero.book} <Calendar className="w-4 h-4" />
              </span>
            </a>
            
            <a href="https://www.ubereats.com/pt-en/store/labareda-steakhouse/SzfuZVPAUgyKr833FsPkCw?srsltid=AfmBOoqiPy8xR2JLipp_AzSu-3wo80jEHntzoJJLuX9N2ajMLUSlndMo" target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-[320px] inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white uppercase bg-transparent border border-[#06C167] rounded-full overflow-hidden transition-all hover:border-[#06C167]">
              <span className="absolute inset-0 w-full h-full bg-[#06C167] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative flex items-center gap-2 transition-colors">
                Uber Eats <ShoppingBag className="w-4 h-4" />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 lg:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-embers/20 translate-x-4 translate-y-4 rounded-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop" 
              alt="Delicious food"
              className="w-full h-full object-cover rounded-3xl relative z-10 hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            key={`about-${lang}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="micro-label text-embers" style={{ color: "var(--color-embers)" }}>{txt.about.label}</span>
            <h2 className="display-title text-5xl md:text-7xl mt-4 mb-8">{txt.about.title1}<br/>{txt.about.title2}</h2>
            <div className="space-y-6 serif-text text-xl md:text-2xl text-white/80 font-light leading-relaxed">
              <p>
                {txt.about.p1}
              </p>
              <p>
                {txt.about.p2}
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="border-l border-white/20 pl-6">
                <h4 className="display-title text-2xl mb-2">{txt.about.tk_title}</h4>
                <p className="text-sm font-sans text-white/60">{txt.about.tk_desc}</p>
              </div>
              <div className="border-l border-white/20 pl-6">
                <h4 className="display-title text-2xl mb-2">{txt.about.ev_title}</h4>
                <p className="text-sm font-sans text-white/60">{txt.about.ev_desc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 lg:py-32 bg-charcoal relative">
        <div className="absolute inset-0 bg-black z-0"></div>
        <motion.div 
          key={`services-${lang}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center"
        >
          <h2 className="display-title text-5xl md:text-6xl text-embers" style={{ color: "var(--color-embers)" }}>{txt.services.pre}</h2>
          <h3 className="display-title text-4xl md:text-5xl text-white mt-2 mb-12">{txt.services.title}</h3>
          
          <div className="w-16 h-1 bg-embers mx-auto mb-16" style={{ backgroundColor: "var(--color-embers)" }}></div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 justify-items-center">
            {/* Ar Condicionado */}
            <div className="flex flex-col items-center gap-2 md:gap-4 group">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center text-embers group-hover:scale-110 transition-transform duration-300 shadow-xl" style={{ color: "var(--color-embers)" }}>
                <Wind className="w-6 h-6 md:w-10 md:h-10" />
              </div>
              <span className="font-sans text-xs md:text-sm text-white font-medium tracking-wide text-center">{txt.services.air}</span>
            </div>
            
            {/* Entrega */}
            <div className="flex flex-col items-center gap-2 md:gap-4 group">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center text-embers group-hover:scale-110 transition-transform duration-300 shadow-xl" style={{ color: "var(--color-embers)" }}>
                <Truck className="w-6 h-6 md:w-10 md:h-10" />
              </div>
              <span className="font-sans text-xs md:text-sm text-white font-medium tracking-wide text-center">{txt.services.delivery}</span>
            </div>

            {/* Eventos Privados */}
            <div className="flex flex-col items-center gap-2 md:gap-4 group">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center text-embers group-hover:scale-110 transition-transform duration-300 shadow-xl" style={{ color: "var(--color-embers)" }}>
                <Wine className="w-6 h-6 md:w-10 md:h-10" />
              </div>
              <span className="font-sans text-xs md:text-sm text-white font-medium tracking-wide text-center">{txt.services.events}</span>
            </div>

            {/* Takeaway */}
            <div className="flex flex-col items-center gap-2 md:gap-4 group">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center text-embers group-hover:scale-110 transition-transform duration-300 shadow-xl" style={{ color: "var(--color-embers)" }}>
                <ShoppingBag className="w-6 h-6 md:w-10 md:h-10" />
              </div>
              <span className="font-sans text-xs md:text-sm text-white font-medium tracking-wide text-center">{txt.services.takeaway}</span>
            </div>

            {/* Wi-fi */}
            <div className="flex flex-col items-center gap-2 md:gap-4 group col-span-2 md:col-span-1">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center text-embers group-hover:scale-110 transition-transform duration-300 shadow-xl" style={{ color: "var(--color-embers)" }}>
                <Wifi className="w-6 h-6 md:w-10 md:h-10" />
              </div>
              <span className="font-sans text-xs md:text-sm text-white font-medium tracking-wide text-center">{txt.services.wifi}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 md:py-16 lg:py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            key={`gallery-hdr-${lang}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <span className="micro-label text-embers" style={{ color: "var(--color-embers)" }}>{txt.gallery.label}</span>
            <h2 className="display-title text-6xl md:text-8xl mt-4">{txt.gallery.title}</h2>
          </motion.div>
          
          <div className="space-y-24">
            {/* Snacks */}
            <div>
              <motion.h3 
                key={`snk-${lang}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="display-title text-3xl md:text-4xl text-white mb-8 border-b border-white/10 pb-4"
              >
                {txt.gallery.snacks}
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {[
                  "https://images.unsplash.com/photo-1626082895617-2c6b45070281?q=80&w=800&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop"
                ].map((src, i) => (
                  <motion.div
                    key={`snack-${i}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="aspect-square bg-white/5 rounded-2xl md:rounded-3xl overflow-hidden group"
                  >
                    <img 
                      src={src} 
                      alt="Snack"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Main Courses */}
            <div>
              <motion.h3 
                key={`main-${lang}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="display-title text-3xl md:text-4xl text-white mb-8 border-b border-white/10 pb-4"
              >
                {txt.gallery.main}
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {[
                  "https://images.unsplash.com/photo-1544025162-81111421544a?q=80&w=800&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800&auto=format&fit=crop"
                ].map((src, i) => (
                  <motion.div
                    key={`main-${i}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="aspect-square bg-white/5 rounded-2xl md:rounded-3xl overflow-hidden group"
                  >
                    <img 
                      src={src} 
                      alt="Main Course"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desserts */}
            <div>
              <motion.h3 
                key={`des-${lang}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="display-title text-3xl md:text-4xl text-white mb-8 border-b border-white/10 pb-4"
              >
                {txt.gallery.desserts}
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {[
                  "https://images.unsplash.com/photo-1698286230626-d3807204fbf0?q=80&w=800&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop"
                ].map((src, i) => (
                  <motion.div
                    key={`dessert-${i}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="aspect-[4/3] bg-white/5 rounded-2xl md:rounded-3xl overflow-hidden group"
                  >
                    <img 
                      src={src} 
                      alt="Dessert"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Drinks */}
            <div>
              <motion.h3 
                key={`drk-${lang}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="display-title text-3xl md:text-4xl text-white mb-8 border-b border-white/10 pb-4"
              >
                {txt.gallery.drinks}
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {[
                  "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop"
                ].map((src, i) => (
                  <motion.div
                    key={`drink-${i}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="aspect-[3/4] bg-white/5 rounded-2xl md:rounded-3xl overflow-hidden group"
                  >
                    <img 
                      src={src} 
                      alt="Drink"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Location */}
      <footer id="footer" className="relative py-12 md:py-16 lg:py-24 bg-black overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-embers mt-1" style={{ color: "var(--color-embers)" }} />
                <motion.div key={`loc-${lang}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="w-full">
                  <h5 className="font-sans font-bold uppercase tracking-wider text-sm mb-1">{txt.reserve.loc}</h5>
                  <p className="text-white/60 font-sans text-sm mb-6">Mafra, Portugal<br/>Labareda Smoke House</p>
                  
                  <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/5 relative shadow-2xl bg-black">
                    <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] z-20"></div>
                    <iframe 
                      src="https://maps.google.com/maps?q=Labareda%20Smoke%20House,%20Mafra&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full grayscale-[100%] invert-[90%] contrast-[90%] brightness-[70%] hue-rotate-[180deg]"
                    ></iframe>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div key={`info-${lang}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-col gap-8 md:pl-12">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-embers mt-2" style={{ color: "var(--color-embers)" }} />
                <div className="w-full">
                  <h5 className="font-sans font-bold uppercase tracking-wider text-sm mb-4">{txt.reserve.hrs}</h5>
                  <div className="text-white/80 font-sans text-sm grid grid-cols-[100px_1fr] gap-y-2">
                    <span className="font-semibold text-white">{txt.reserve.mon}</span> <span>19:30 – 22:30</span>
                    <span className="font-semibold text-white">{txt.reserve.tue}</span> <span>19:30 – 22:30</span>
                    <span className="font-semibold text-white">{txt.reserve.wed}</span> <span className="text-red-400 font-medium">{txt.reserve.closed}</span>
                    <span className="font-semibold text-white">{txt.reserve.thu}</span> <span>19:30 – 22:30</span>
                    <span className="font-semibold text-white">{txt.reserve.fri}</span> <span>19:30 – 22:30</span>
                    <span className="font-semibold text-white flex items-start">{txt.reserve.sat}</span> <span>12:30 – 15:00<br/>19:30 – 22:30</span>
                    <span className="font-semibold text-white">{txt.reserve.sun}</span> <span className="text-red-400 font-medium">{txt.reserve.closed}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 mt-2">
                <Phone className="w-6 h-6 text-embers mt-1" style={{ color: "var(--color-embers)" }} />
                <div>
                  <h5 className="font-sans font-bold uppercase tracking-wider text-sm mb-1">{txt.reserve.cnt}</h5>
                  <p className="text-white/60 font-sans text-sm">+351 900 000 000<br/>reservas@labareda.pt</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mt-2">
                <CreditCard className="w-6 h-6 text-embers mt-1" style={{ color: "var(--color-embers)" }} />
                <div>
                  <h5 className="font-sans font-bold uppercase tracking-wider text-sm mb-1">{txt.reserve.pym}</h5>
                  <p className="text-white/60 font-sans text-sm mt-2 flex gap-3 items-center flex-wrap">{txt.reserve.pym_desc}</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <h5 className="font-sans font-bold uppercase tracking-wider text-sm mb-4">{txt.reserve.social}</h5>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/labaredasmokehouse/" target="_blank" rel="noopener noreferrer" className="text-embers hover:opacity-80 transition-opacity" style={{ color: "var(--color-embers)" }}>
                    <Instagram className="w-8 h-8" />
                  </a>
                  <a href="https://www.facebook.com/labaredasteakhouse/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="text-embers hover:opacity-80 transition-opacity" style={{ color: "var(--color-embers)" }}>
                    <Facebook className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div key={`ftr-${lang}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-white/40 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} {txt.reserve.copy}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">{txt.reserve.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
              <a href="#" className="hover:text-white transition-colors">{txt.reserve.legal}</a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

function MenuPage({ lang, setLang, txt }: any) {
  const data = menuData[lang as 'pt' | 'en'];
  
  return (
    <div className="min-h-screen bg-black text-white selection:bg-embers selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/10">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" className="flex items-center gap-2 micro-label !text-white hover:!text-embers transition-colors">
            {txt.menu.back}
          </Link>
        </motion.div>
        <motion.button 
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
          className="flex items-center gap-2 micro-label !text-white hover:!text-embers transition-colors ml-4 bg-white/10 px-3 py-1.5 rounded-full"
        >
          <Globe className="w-4 h-4" />
          <motion.span key={lang} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
            {lang === 'pt' ? 'EN' : 'PT'}
          </motion.span>
        </motion.button>
      </nav>

      <motion.div 
        key={lang}
        initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
        className="pt-32 px-6 max-w-5xl mx-auto pb-24 grid md:grid-cols-2 gap-16"
      >
        
        {/* Left Column */}
        <div className="space-y-12">
          {data.slice(0, 4).map((section, idx) => (
            <div key={idx}>
              <h2 className="display-title text-3xl mb-8 border-b-2 border-white/10 pb-4 text-embers" style={{ color: "var(--color-embers)" }}>
                {section.category}
              </h2>
              {section.desc && <p className="text-sm font-sans mb-6 -mt-4 text-white/60 font-semibold">{section.desc}</p>}
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="flex justify-between items-baseline gap-4 relative overflow-hidden">
                      <h3 className="font-sans font-bold text-lg whitespace-nowrap bg-black pr-2 z-10 block">{item.name}</h3>
                      <div className="flex-1 w-full border-b-[2px] border-dotted border-white/20 min-w-[1rem] relative -top-[6px] h-4 shrink"></div>
                      <span className="font-sans font-bold text-lg whitespace-nowrap bg-black pl-2 z-10 block shrink-0">{item.price}</span>
                    </div>
                    {item.desc && (
                      <p className="text-white/60 text-sm font-sans pr-12 whitespace-pre-wrap">{item.desc}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-12">
          {data.slice(4).map((section, idx) => (
            <div key={idx}>
              <h2 className="display-title text-3xl mb-8 border-b-2 border-white/10 pb-4 text-embers" style={{ color: "var(--color-embers)" }}>
                {section.category}
              </h2>
              {section.desc && <p className="text-sm font-sans mb-6 -mt-4 text-white/60 font-semibold">{section.desc}</p>}
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="flex justify-between items-baseline gap-4 relative overflow-hidden">
                      <h3 className="font-sans font-bold text-lg whitespace-nowrap bg-black pr-2 z-10 block">{item.name}</h3>
                      <div className="flex-1 w-full border-b-[2px] border-dotted border-white/20 min-w-[1rem] relative -top-[6px] h-4 shrink"></div>
                      <span className="font-sans font-bold text-lg whitespace-nowrap bg-black pl-2 z-10 block shrink-0">{item.price}</span>
                    </div>
                    {item.desc && (
                      <p className="text-white/60 text-sm font-sans pr-12 whitespace-pre-wrap">{item.desc}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </motion.div>
      
      {/* Footer Info / Allergy info */}
      <motion.div 
        key={`footer-${lang}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white/5 py-5 px-6 text-center mt-12 grid place-items-center border-t border-white/10"
      >
        <p className="font-sans text-[11px] uppercase md:text-xs font-semibold tracking-widest text-white/50">
          {lang === 'pt' ? 'IVA incluído. Atenção a alergénios: caso tenha alguma alergia ou restrição alimentar, por favor avise a nossa equipa.' : 'VAT included. Attention to allergens: if you have any food allergies, please notify our staff.'}
        </p>
      </motion.div>

    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const txt = t[lang];

  return (
    <Routes>
      <Route path="/" element={<Home lang={lang} setLang={setLang} txt={txt} />} />
      <Route path="/menu" element={<MenuPage lang={lang} setLang={setLang} txt={txt} />} />
    </Routes>
  );
}
