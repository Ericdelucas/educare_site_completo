# Site EduCare

## Descrição
Site completo para a plataforma EduCare - uma plataforma educacional que conecta estudantes a jovens tutores, com foco na segurança de menores e conformidade legal.

## Características do Site

### Design e Identidade Visual
- **Paleta de cores**: Roxo (#8B5CF6) e Laranja (#F97316) conforme especificado
- **Logo**: Integrada na navegação e design
- **Design responsivo**: Funciona perfeitamente em desktop e mobile
- **Animações suaves**: Transições e efeitos hover para melhor experiência

### Estrutura do Site
1. **Home (Página Inicial)**: Apresentação da proposta e botões de cadastro
2. **Funcionalidades para Pais/Responsáveis**: Cadastro seguro, verificação e consentimento
3. **Funcionalidades para Estudantes**: Como funciona o sistema de tutoria
4. **Segurança e Privacidade**: Chat moderado, aulas monitoradas, conformidade legal
5. **Painel dos Pais**: Alertas, relatórios e controle total
6. **Nossas Políticas**: Termos de uso e política de privacidade
7. **Como Funciona Tecnicamente**: Explicação técnica simplificada
8. **Rodapé**: Links rápidos, redes sociais e contato

### 🎥 Nova Página: Chamada de Vídeo (video_call.html)
Uma simulação completa de uma chamada de vídeo educacional com:
- **Interface de vídeo**: Área principal para o professor e miniatura do aluno
- **Controles de chamada**: Microfone, câmera, levantar a mão e encerrar chamada
- **Chat em tempo real**: Sistema de mensagens entre alunos e professor
- **Funcionalidade "Levantar a Mão"**: Botão interativo que muda de estado
- **Design responsivo**: Adaptação perfeita para desktop e mobile
- **Cores da marca**: Roxo e laranja mantendo a identidade visual

### Funcionalidades Implementadas
- ✅ Navegação suave entre seções
- ✅ Modais interativos para cadastro
- ✅ Design responsivo para mobile
- ✅ Animações ao rolar a página
- ✅ Menu hambúrguer para mobile
- ✅ Efeitos hover nos botões
- ✅ Header com transparência ao rolar
- ✅ **NOVA**: Página de chamada de vídeo com chat e levantar a mão

## Como Visualizar o Site

### Opção 1: Abrir Localmente
1. Extraia todos os arquivos em uma pasta
2. Abra o arquivo `index.html` em qualquer navegador web moderno

### Opção 2: Servidor Local (Recomendado)
Para melhor experiência, use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (se tiver npx instalado)
npx serve .

# Com PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

## Estrutura de Arquivos
```
educare_site/
├── index.html               # Página principal
├── video_call.html          # Página de chamada de vídeo
├── css/
│   ├── style.css           # Estilos da página principal
│   └── video_call_style.css # Estilos da página de chamada
├── js/
│   ├── script.js           # JavaScript da página principal
│   └── video_call_script.js # JavaScript da página de chamada
├── img/
│   ├── educare_logo.jpeg    # Logo da EduCare
│   └── app_interface.jpg    # Interface do app
└── README.md               # Este arquivo
```

## Tecnologias Utilizadas
- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com Flexbox e Grid
- **JavaScript**: Interatividade e animações
- **Design Responsivo**: Media queries para diferentes telas

## Recursos de Segurança Destacados
- Conformidade com LGPD, ECA e Marco Civil da Internet
- Chat 100% moderado dentro da plataforma
- Aulas online monitoradas com gravação opcional
- Verificação em duas etapas para pais/responsáveis
- Consentimento digital via assinatura eletrônica

## Próximos Passos
Este é um site estático de apresentação. Para implementar as funcionalidades completas da plataforma, seria necessário:
- Backend para autenticação e cadastro
- Sistema de pagamentos
- Plataforma de videoconferência
- Sistema de moderação de chat
- Integração com APIs de verificação de documentos

## Suporte
Para dúvidas ou modificações, entre em contato através dos canais oficiais da EduCare.

