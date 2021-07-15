<h1>Projeto Integrador - Helper House</h1>

<h2>Desenvolvendo e testando localmente</h2>

<pre>
git clone git@github.com:$username/$app_repository.git
cd $app_repository
npm i
npm start / npx nodemon no root
</pre>

Dando tudo certo, o acesso será em http://localhost:3000/

<h2>Procedimentos Importantes</h2>

<p>1 - Foram criados diversos arquivos já com as partials <b>header.ejs</b>, <b>footer.ejs</b> e <b>head.ejs</b>. Se alguém quiser modificar um deles, só acessar <b>/views/partials</b>. O que muda de um para o outro é apenas o conteúdo, já foi deixado pré-setado um local para inserção de título e corpo da página, acredito que mexeremos ainda em relação a SEO (nessa primeira parte não é necessário, acredito eu), só mantive algumas estruturas já feitas pela Leticia para não deixar confuso.</p>.
<p>2 - Em <b>/routes/index.js</b> foram criados rotas para cada página, em que deve ser inserido a url para o caminho, o arquivo a ser renderizado e as informações que o compõem.</p>
<p>Exemplo:</p>
<pre>
router.get('/para-profissional', function(req, res, next) {
  res.render('para-profissional', { title: 'Prestar Serviço', logged: false, style: false });
});
</pre>
<p><b>/para-profissional</b> é a url de acesso no GET.</p>
<p><b>render('para-profissional')</b> é a view renderizada que está criada na pasta views.</p>
<p><b>{ title: 'Prestar Serviço', logged: false, style: false }</b> é a informação repassada para a view. Veja que temos  a title que seria o título da página, a informação logged, no momento ela está sendo setada individualmente em cada rota, mas futuramente implementaremos algo para identificar se está logado ou não. Então se fizerem uma página interna que o usuário já está logado, basta alterar a propriedade para <b>true</b> e assim no header vai trocar para <b>Minha Conta</b>. Por último, style vai ser falso se não for criar nenhum arquivo css para aquela rota, se tiver, basta colocar o nome do arquivo.</p>


