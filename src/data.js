let rawTitles = `customerID,companyName,contactName,contactTitle,address,city,postalCode,country,phone,fax`;
let rawData = `EASTC,Eastern Connection,Ann Devon,Sales Agent,35 King George,London,NULL,WX3 6FW,UK,(171) 555-0297,(171) 555-3373\nERNSH,Ernst Handel,Roland Mendel,Sales Manager,Kirchgasse 6,Graz,NULL,8010,Austria,7675-3425,7675-3426\nFAMIA,Familia Arquibaldo,Aria Cruz,Marketing Assistant,Rua Orós 92,Sao Paulo,SP,05442-030,Brazil,(11) 555-9857,NULL\nFISSA,FISSA Fabrica Inter. Salchichas S.A.,Diego Roel,Accounting Manager,C/ Moralzarzal 86,Madrid,NULL,28034,Spain,(91) 555 94 44,(91) 555 55 93\nFOLIG,Folies gourmandes,Martine Rancé,Assistant Sales Agent,184 chaussée de Tournai,Lille,NULL,59000,France,20.16.10.16,20.16.10.17\nFOLKO,Folk och fä HB,Maria Larsson,Owner,Åkergatan 24,Bräcke,NULL,S-844 67,Sweden,0695-34 67 21,NULL\nFRANK,Frankenversand,Peter Franken,Marketing Manager,Berliner Platz 43,München,NULL,80805,Germany,089-0877310,089-0877451\nFRANR,France restauration,Carine Schmitt,Marketing Manager,54 rue Royale,Nantes,NULL,44000,France,40.32.21.21,40.32.21.20\nFRANS,Franchi S.p.A.,Paolo Accorti,Sales Representative,Via Monte Bianco 34,Torino,NULL,10100,Italy,011-4988260,011-4988261\nFURIB,Furia Bacalhau e Frutos do Mar,Lino Rodriguez,Sales Manager,Jardim das rosas n. 32,Lisboa,NULL,1675,Portugal,(1) 354-2534,(1) 354-2535\nGALED,Galería del gastrónomo,Eduardo Saavedra,Marketing Manager,Rambla de Cataluña 23,Barcelona,NULL,08022,Spain,(93) 203 4560,(93) 203 4561\nGODOS,Godos Cocina Típica,José Pedro Freyre,Sales Manager,C/ Romero 33,Sevilla,NULL,41101,Spain,(95) 555 82 82,NULL\nGOURL,Gourmet Lanchonetes,André Fonseca,Sales Associate,Av. Brasil 442,Campinas,SP,04876-786,Brazil,(11) 555-9482,NULL\nGREAL,Great Lakes Food Market,Howard Snyder,Marketing Manager,2732 Baker Blvd.,Eugene,OR,97403,USA,(503) 555-7555,NULL\nGROSR,GROSELLA-Restaurante,Manuel Pereira,Owner,5ª Ave. Los Palos Grandes,Caracas,DF,1081,Venezuela,(2) 283-2951,(2) 283-3397\nHANAR,Hanari Carnes,Mario Pontes,Accounting Manager,Rua do Paço 67,Rio de Janeiro,RJ,05454-876,Brazil,(21) 555-0091,(21) 555-8765\nHILAA,HILARION-Abastos,Carlos Hernández,Sales Representative,Carrera 22 con Ave. Carlos Soublette #8-35,San Cristóbal,Táchira,5022,Venezuela,(5) 555-1340,(5) 555-1948\nHUNGC,Hungry Coyote Import Store,Yoshi Latimer,Sales Representative,City Center Plaza 516 Main St.,Elgin,OR,97827,USA,(503) 555-6874,(503) 555-2376\nHUNGO,Hungry Owl All-Night Grocers,Patricia McKenna,Sales Associate,8 Johnstown Road,Cork,Co. Cork,NULL,Ireland,2967 542,2967 3333`;

let data = rawData.split("\n").map((e) => e.split(",").slice(0, -3));

data = data.map((i) => {
  return [...i.slice(0, 7), ...i.slice(8)];
});

let titles = rawTitles.split(",").slice(0, -3);

let nullPostalData = data.filter((e) => e.includes("NULL"));
let marketManagers = data.filter((e) => e.includes("Marketing Manager"));

export { data, titles, nullPostalData, marketManagers };
