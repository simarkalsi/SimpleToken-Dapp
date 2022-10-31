

async function main(){ 
  const[deployer]=await ethers.getSigners();

  const  Token=await  ethers.getContractFactory("Token");
  const token=await Token.deploy(100000,"Simple Coin","SC",2);

  console.log("Token address:",token.address)
}

main()
.then(()=>process.exit(0))
.catch((error)=>{
  console.error(error);
  process.exit(1);
})